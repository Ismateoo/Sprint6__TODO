import styles from './styles.module.css'

export default function Filters({theme, filterAll, filterActive, filterCompleted, clearTasks, colorAll, colorActive, colorCompleted}) {
  return (
    <div className={`${styles.container} ${theme == 'dark' ? styles.darkFooter : styles.lightFooter}`}>
      <div className={`${styles.container__AllActiveCompleted} ${theme == 'dark' ? styles.darkFooter : styles.lightFooter}`}>
          <a href='#' onClick={filterAll} className={styles.link} id={colorAll}>All</a>
          <a href='#' onClick={filterActive} className={styles.link} id={colorActive}>Active</a>
          <a href='#' onClick={filterCompleted} className={styles.link} id={colorCompleted}>Completed</a>
        </div>
        <div className={styles.container__Clear}>
        <a href='#' onClick={clearTasks} className={styles.link}>Clear Completed</a>
        </div>
        </div>
  )
}
