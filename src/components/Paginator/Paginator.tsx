import React, {useState} from 'react'
import {Button, makeStyles, Typography} from "@material-ui/core";
import cn from 'classnames'

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage?: number
    onPageChanged?: (pageNumber: number) => void
    portionSize?: number
}

const useStyles = makeStyles((theme) => ({
    paginator: {
        margin: '10px',
        display: 'flex',
        justifyContent: 'center',
    },
    pageNumber: {
        padding: '10px 20px',
        backgroundColor: '#d7d7d7',
        borderRadius: '3px',
        margin: '8px',
        cursor: 'pointer',

    },
    selectedPage: {
        fontWeight: 'bold',
        borderColor: 'black',
        cursor: 'pointer',
    },
    button: {
        padding: '10px 30px',
        height: '50px',
        marginTop: '7px',
    }
}));


export const Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize,
                                          currentPage = 1,
                                          onPageChanged = x => x,
                                          portionSize = 10}) => {
    const classes = useStyles();

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={cn(classes.paginator)}>
        { portionNumber > 1 &&
        <Button variant="contained" color="primary" className={classes.button} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</Button> }

        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
                return <Typography variant="subtitle1" className={ cn({
                    [classes.selectedPage]: currentPage === p
                }, classes.pageNumber) }
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</Typography>
            })}
        { portionCount > portionNumber &&
        <Button variant="contained" color="primary" className={classes.button} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</Button> }
    </div>
}
