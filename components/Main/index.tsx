import styles from './index.module.css'

export function MainComponent(props: any) {
    return (
        <div className={styles.main}>
            {props.children}
        </div>
    )
}