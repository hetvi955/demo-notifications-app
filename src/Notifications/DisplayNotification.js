import React, { useState, useEffect } from "react";
import { FaExclamationTriangle, FaCheck, FaExclamation, FaInfo } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
const NotificationItem = ({ id, desc, dispatch, type }) => {
    //to set the visibility of the notification item
    const [visible, setVisible] = useState(false);
    const [icon, setIcon] = useState(null);

    //change time id and update after every sec
    const [timeId, setTimeId] = useState(null);

    //display ticker
    const [ticker, setTicker] = useState(0);

    const handleBegin = () => {
        const id = setInterval(() => {
            setTicker(time => {
                if (time < 10) {
                    return time + 1;
                }

                clearInterval(id);
                return time;
            });
        }, 1000);

        setTimeId(id);
    };

    const handleClose = () => {
        clearInterval(timeId);
        setVisible(true);
        setTimeout(() => {
            dispatch({
                motive: "DELETE",
                id: id
            })
        }, 10)
    };

//add icons according to the type
//default if information type
    const handleChangeIcon = (type) => {
        if (type == "info") {
            setIcon(<FaInfo />)
        } else if (type == "err") {
            setIcon(<FaExclamation />)
        }
        else if (type == "success") {
            setIcon(<FaCheck />)
        } else {
            setIcon(<FaExclamationTriangle />)
        }
    }


    useEffect(() => {
        if (ticker === 10) {

            // close notification after 10 secs
            handleClose()
        }
    }, [ticker])

    useEffect(() => {
        handleBegin();
        handleChangeIcon(type)
    }, []);

    return (
        <div className={`notification${type} ${visible ? "visible" : ""}`}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ color: "white", margin: 15, padding: 5, fontSize: 20, borderRadius: 50, backgroundColor: "gray" }}>{ticker}</p>
                <p style={{ color: "white", fontSize: 20 }}>
                    {icon}
                </p>
                <p onClick={handleClose} style={{ color: "white", fontSize: 20, paddingInline: 5 }}><ImCancelCircle /></p>
            </div>
            <div>
                <h3 style={{ color: "white", display: "flex", justifyContent: "center" }}>

                    {desc}
                    </h3>
            </div>

        </div>


    );
};

export default NotificationItem;