import styles from './index.module.css'

export function LinkComponent(props: any) {
    return (
        <a {...props} className={styles.link}>{props.text}</a>
    )
}