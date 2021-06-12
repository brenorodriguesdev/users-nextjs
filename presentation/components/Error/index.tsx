import styles from './index.module.css'

export function ErrorComponent(props: any) {
    return (
        <a {...props} className={styles.error}>{props.text}</a>
    )
}