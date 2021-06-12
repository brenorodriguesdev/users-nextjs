import styles from './index.module.css'

export function HelpComponent(props: any) {
    return (
        <div className={styles.containerHelp}>
            {props.children}
        </div>
    )
}