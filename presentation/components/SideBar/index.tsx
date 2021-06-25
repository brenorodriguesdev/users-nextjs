import styles from './index.module.css'

export function SideBarComponent(props: any) {
    return (
        <aside className={styles.sidebar}>
            {props.children}
        </aside>
    )
}