import React from 'react'
import RepoItem from './RepoItem'
import classes from './modules/ReposList.module.css'
import failed from '../img/failed.png'
import empty from '../img/empty.png'

const ReposList = ({ repos, error }) => {

    if (error) {
        return (
            <div className="container">
                <h3 className={classes.repos__title}>Поиск не дал результатов!</h3>
                <img src={failed} alt="Поиск не дал результатов" className={classes.failed}/>
            </div>
        )
    }

    if (error === '') {
        return
    }

        if (repos.length) {
            return (
                <div className="container">
                    <div className={classes.repos}>
                        <h2 className={classes.repos__title}>Результаты поиска</h2>
                        <div className={classes.repos__heads}>
                            <div className={classes.repos__heads_item}>
                                Имя репозитория
                            </div>
                            <div className={classes.repos__heads_item}>
                                Видимость
                            </div>
                            <div className={classes.repos__heads_item}>
                                Создан
                            </div>
                            <div className={classes.repos__heads_item}>
                                Последние изменения
                            </div>
                        </div>
                        <div>
                            {repos.map(repo =>
                                <RepoItem repo={repo} key={repo.id} />
                            )}
                        </div>
                    </div>
                </div>
            )
        }

    return (
        <div className="container">
            <div className={classes.repos}>
                <h2 className={classes.repos__title}>Результаты поиска</h2>
                <h3 className={classes.repos__subtitle}>Список репозиториев пуст!</h3>
                <img src={empty} alt="Список репозиториев пуст" className={classes.empty}/>
            </div>
        </div>
    )
}

export default ReposList