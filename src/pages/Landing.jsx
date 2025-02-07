import React from "react"
import styles from "./Landing.module.css"
import { ViewMode, ViewContext } from "../context/ViewContext"

function Landing() {
  const { setViewMode } = React.useContext(ViewContext)

  const createCharacter = () => {
    setViewMode(ViewMode.CREATE)
  }

  const loadCharacter = () => {
    setViewMode(ViewMode.LOAD)
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={createCharacter}>
          <img src="/assets/media/btn_create_character.png" />
        </button>
        {/*
        <button className={styles.button}
            onClick={
                loadCharacter
            }><img src='/assets/media/btn_load_character.png' /></button>
            */}
      </div>
    </div>
  )
}

export default Landing
