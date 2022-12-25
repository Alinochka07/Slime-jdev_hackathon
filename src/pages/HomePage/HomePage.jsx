import React from 'react'
import { Header } from '../../components/Header/Header'
import { Main } from '../../components/Main/Main'
import { Content } from '../../components/Header/Content/Content'
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer'

export const HomePage = () => {
    return (
        <div>
            <Header />
            <Content />
            <Main />
        </div>
    )
}
