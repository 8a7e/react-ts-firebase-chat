import { useContext, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

import {
  Button,
  Grid,
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
    <Container>
      <Paper sx={{ marginTop: 1, padding: "10px" }}>
        <Grid container justifyContent={"space-between"} minWidth={"100%"}>
          <Grid>
            <Box
              sx={{
                height: "70vh",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                width: "500px",
              }}
            >
              {loading && <CircularProgress />}
              {messages?.map((message) => (
                <Message message={message} />
              ))}
            </Box>
          </Grid>
          <Grid mt={2} width="600px">
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
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
export default Chat;
