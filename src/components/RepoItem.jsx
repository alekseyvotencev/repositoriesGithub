import React from 'react'
import classes from './modules/RepoItem.module.css'

const RepoItem = ({ repo }) => {
    return (
        <div className={classes.repo__item}>
            <div className={classes.repo__name}><a href={repo.html_url} target="_blank" rel='noreferrer' alt="Ссылка на репозиторий" className={classes.repo__name_link}>{repo.name}</a></div>
            <div className={classes.repo__visibility}>{repo.visibility}</div>
            <div className={classes.repo__created}>
                <span className={classes.repo__created_date}>
                    {new Date(repo.created_at).toLocaleDateString()}
                </span>
                <span className={classes.repo__created_time}>
                    {new Date(repo.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>
            <div className={classes.repo__pushed}>
                <span className={classes.repo__pushed_date}>
                    {new Date(repo.pushed_at).toLocaleDateString()}
                </span>
                <span className={classes.repo__pushed_time}>
                    {new Date(repo.pushed_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>
        </div>
    )
}

export default RepoItem