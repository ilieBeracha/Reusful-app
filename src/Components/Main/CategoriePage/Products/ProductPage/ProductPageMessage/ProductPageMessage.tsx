import "./ProductPageMessage.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ProductInterface } from "../../../../../../model/productModel";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { MessagesInterface } from "../../../../../../model/MessagesModel";
import { apiService } from "../../../../../../service/ApiService";
import { toast } from "react-toastify";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 0,
    boxShadow: 24,
    p: 4,
};

function ToastMessageSent() {
    return toast.success("Message Sent", {
        position: "top-right",
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
    });
}
function ToastMessageEmptyString() {
    return toast.info("Write Message", {
        position: "top-right",
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
    });
}
function ToastMessageError() {
    return toast.error("Error occured", {
        position: "top-right",
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
    });
}

export default function ProductPageMessage({ product }: { product: ProductInterface }) {
    const authSlice = useSelector((state: any) => state.auth);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { register, handleSubmit } = useForm<MessagesInterface>()

    async function sendMessage(message: any) {
        if (message.message === '') {
            ToastMessageEmptyString()
            return;
        } else {
            setOpen(false)
            const messageObj = {
                sender_id: authSlice.sub,
                reciver_id: product.userId,
                message: message.message,
                time: new Date().getTime()
            }
            try {
                const response = await apiService.sendMessage(messageObj)
                ToastMessageSent()
                console.log(response);
            } catch (e) {
                ToastMessageError()
            }
        }
    }

    return (
        <div>
            <Button onClick={handleOpen}>
                <span>Message {product?.username}</span>
            </Button>
            <Modal

                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Message {product.username}
                    </Typography>
                    {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}> */}
                    <div className="ProductPageMessageContent">
                        <form onSubmit={handleSubmit(sendMessage)} action="">

                            <textarea defaultValue={`Hey ${product.username}, Id like to get more information about your ${product.productName}, Thank you!`} placeholder="Message" {...register('message')} />
                            <button>Send</button>
                        </form>
                    </div>
                    {/* </Typography> */}
                </Box>
            </Modal>
        </div>
    );
}
