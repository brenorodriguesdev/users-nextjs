import styles from './index.module.css'

export function FormComponent(props: any) {
    return (
        <form {...props} className={styles.form}>
            {props.children}
        </form>
    )
}