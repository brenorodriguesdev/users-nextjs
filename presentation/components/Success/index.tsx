import styles from './index.module.css'

export function SuccessComponent(props: any) {
    return (
        <a {...props} className={styles.success}>{props.text}</a>
    )
}