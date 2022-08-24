import React from 'react'
import {AffairPriorityType, AffairType} from "./HW2";
import styles from "./Affairs.module.css";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const chooseClassnameForPriority= (priority: AffairPriorityType): string => {
        switch (priority) {
            case 'high':
                return 'highPriority';
            case "middle":
                return 'middlePriority'
            case "low":
                return 'lowPriority';
        }
    }

    return (
        <div className={styles.affair}>
            <div className={styles.name}>
                <span>{props.affair.name} </span>
            </div>

            <div className={styles.priority}>
                <span className={styles[chooseClassnameForPriority(props.affair.priority)]}>{props.affair.priority}</span>
            </div>

            <button className={styles.deleteBtn} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
