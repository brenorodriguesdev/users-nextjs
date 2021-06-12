import styles from './index.module.css'


export function ButtonComponent(props: any) {
    return (
        <button className={props.disabled ? styles.buttonDisabled : styles.button} {...props}>{props.text}</button>
    )
}