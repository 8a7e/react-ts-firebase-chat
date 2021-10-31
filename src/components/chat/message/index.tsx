import {
  createRef,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { Box, Typography, Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { MessageType } from "../../../types";
import { Context } from "../../../App";

const useStyles = makeStyles({
  messageSent: {
    borderRadius: "20px 20px 0 20px",
    marginTop: 10,
    marginRight: 10,
    minWidth: "50%",
    maxWidth: "50%",
    padding: 15,
    display: "flex",
    boxShadow: "5px 5px 10px -5px rgba(34, 60, 80, 0.6)",
    flexDirection: "column",
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    alignSelf: "flex-end",
    color: "#f2f2f2",
  },
  messageReceived: {
    borderRadius: "20px 20px 0 20px",
    marginTop: 10,
    minWidth: "50%",
    maxWidth: "50%",
    padding: 15,
    display: "flex",
    boxShadow: "5px 5px 10px -5px rgba(34, 60, 80, 0.6)",
    flexDirection: "column",
    wordWrap: "break-word",
    background: "linear-gradient(45deg, #e6e6e6 30%, #e6e6e6 90%)",
    color: "#1a1a1a",
  },
  time: {
    marginTop: "10px",
    opacity: 0.5,
  },
  messageBody: {
    wordWrap: "break-word",
    overflowyY: "auto",
    width: "100%",
  },
});

const Message: FC<Props> = ({ message }) => {
  const messageRef: React.RefObject<HTMLDivElement> = createRef();
  const classes = useStyles();
  const [isCurrent, setCurrent] = useState(false);
  const ctx = useContext(Context);

  const scrollSmoothHandler = useCallback(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (ctx.user.displayName === message.displayName) setCurrent(true);
  }, [ctx.user, message, messageRef]);

  useEffect(() => {
    scrollSmoothHandler();
  }, [scrollSmoothHandler]);

  return (
    <>
      <Box display="flex" flexDirection="column">
        <Box
          className={isCurrent ? classes.messageSent : classes.messageReceived}
          ref={messageRef}
        >
          <Avatar src={message.photoURL} />
          <Typography variant="h6">{message.displayName}</Typography>
          <Typography className={classes.messageBody} variant="body1">
            {message.text}
          </Typography>
          <Box>
            <Typography
              component="div"
              className={classes.time}
              variant="caption"
              display="block"
              gutterBottom
            >
              {`${message.createdAt.toDate().toDateString()} 
              ${message.createdAt.toDate().toLocaleTimeString()}`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Message;

interface Props {
  message: MessageType;
}
