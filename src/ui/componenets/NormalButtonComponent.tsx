import styles from "./NormalButtonComponent.module.css"

export interface NormalButtonPropTypes {
    buttonText: string,
    addedStyle: string | "",
    colorScheme: string,
    clickHandler: () => void
}


export default function NormalButtonComponent({
                                                  buttonText,
                                                  addedStyle,
                                                  colorScheme,
                                                  clickHandler
                                              }: NormalButtonPropTypes) {

    return (
        <button className={`${addedStyle} boldNormal ${styles.container} ${colorScheme}`} onClick={() => {
            clickHandler()
        }}>
            {buttonText}
        </button>
    )
}