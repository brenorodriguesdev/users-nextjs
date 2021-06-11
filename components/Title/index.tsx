import styles from './index.module.css'

export function TitleComponent(props: any) {
    return (
        <h2 className={styles.title}>{props.text}</h2>
    )
}