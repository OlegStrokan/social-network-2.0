export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type CityWeatherType = {
    main: string,
    description: string,
    icon: string
}

export type WeatherDataType = {
    base: string,
    main: {
        feels_like: number,
        humidity: number,
        pressure: number,
        temp: number,
        temp_max: number,
        temp_min: number
    },
    name: string,
    sys: {
        sunrise: number,
        sunset: number
    },
    visibility: number,
    weather: CityWeatherType[],
    wind: {
        speed: number
    }
}

export type NewsContentType = {
    author: string,
    title: string,
    description: string,
    url: string,
    source: string,
    image: string,
    category: string,
    language: string,
    country: string,
    published_at: string
};

export type NewsType = {
    pagination: {
        limit: number,
        offset: number,
        count: number,
        total: number
    },
    data: NewsContentType[],
}
