import { useContext, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

import {
  Button,
  TextField,
  Paper,
  Box,
  Container,
  CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { firebaseAPI } from "../../API";
import { Context } from "../../App";

import Message from "./message";

function Chat() {
  const ctx = useContext(Context);

  const [messages, loading] = useCollectionData(
    firebaseAPI.messages.orderBy("createdAt")
  );

  const [message, setMessage] = useState("");

  const sendMessage = () => {
    message && firebaseAPI.sendMessage(ctx.user, message);
    setMessage("");
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: { xs: 1 }, height: "82vh" }}>
        <Box sx={{ maxHeight: "85%", overflow: "auto", p: 1 }}>
          {loading && <CircularProgress />}
          {messages?.map(
            (message) =>
              message.createdAt && (
                <Message key={message.createdAt.toString()} message={message} />
              )
          )}
        </Box>
        <Box sx={{ pl: 1, pr: 1 }}>
          <TextField
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
            label="Message"
            variant="outlined"
            multiline
            maxRows={2}
            fullWidth
          />
          <Button
            sx={{ mt: 1 }}
            fullWidth
            variant="contained"
            startIcon={<SendIcon />}
            onClick={sendMessage}
          >
            Send
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
export default Chat;
