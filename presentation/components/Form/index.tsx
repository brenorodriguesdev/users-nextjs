import styles from './index.module.css'

export function FormComponent(props: any) {
    return (
        <div {...props} className={styles.form}>
            {props.children}
        </div>
    )
}