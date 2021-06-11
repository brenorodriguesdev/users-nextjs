import styles from './index.module.css'


export function InputComponent(props: any) {
    return (
        <input className={styles.input} {...props} />
    )
}