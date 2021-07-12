import React, {useState} from 'react'
import {makeStyles} from "@material-ui/core";
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
    },
    pageNumber: {
        padding: '2px',
        border: '1px solid grey',
    },
    selectedPage: {
        fontWeight: 'bold',
        borderColor: 'black',
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
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
                return <span className={ cn({
                    [classes.selectedPage]: currentPage === p
                }, classes.pageNumber) }
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        { portionCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
    </div>
}
