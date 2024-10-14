import { Dialog } from "@mui/material"
import { Close } from "@mui/icons-material";


const DialogNavbar = ({ open, onClose, index, setIndex, setAboutvisibility }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            slotProps={{
                backdrop: {
                    style: { backgroundColor: 'transparent' }
                }
            }}
            sx={{
                backgroundColor: "transparent",
                "& .MuiDialog-container": {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                    justifyContent: "center",
                    backgroundColor: "transparent",
                },
                "& .MuiDialog-paper": {
                    borderRadius: "10px",
                    width: "auto",
                    height: "auto",
                    background: "rgba(26, 34, 90, 0.8)",
                    backdropFilter: "blur(5px)",
                }
            }}
        >
            <div className="w-[200px] h-auto rounded-[10px] py-[10px] px-[10px]">
                <div className="w-[100%] h-auto flex justify-end">
                    <Close sx={{ color: "white", transform: "scale(0.8)" }} onClick={onClose} />
                </div>
                <div className="w-[100%] h-auto py-[5px] flex items-center justify-center cursor-pointer font-heading text-white"
                    key={0}
                    onClick={() => {
                        setIndex(0);
                        setAboutvisibility(false);
                        setTimeout(() => {
                            document.getElementById("home").scrollIntoView({ behavior: "smooth" });
                        }, 500);
                        onClose();
                    }}
                >
                    <span style={{ textDecoration: index == 0 ? "underline" : "none" }}>Home</span>
                </div>
                <div className="w-[100%] h-auto py-[5px] flex items-center justify-center cursor-pointer font-heading text-white"
                    key={1}
                    onClick={() => {
                        setIndex(1);
                        setAboutvisibility(false);
                        setTimeout(() => {
                            document.getElementById("services").scrollIntoView({ behavior: "smooth" });
                        }, 500);
                        onClose();
                    }}

                >
                    <span style={{ textDecoration: index == 1 ? "underline" : "none" }}>Services</span>
                </div>
                <div className="w-[100%] h-auto py-[5px] flex items-center justify-center cursor-pointer font-heading text-white"
                    key={2}
                    onClick={() => {
                        setIndex(2);
                        setAboutvisibility(true);
                        setTimeout(() => {
                            document.getElementById("about").scrollIntoView({ behavior: "smooth" });
                        }, 500);
                        onClose();
                    }}
                >
                    <span style={{ textDecoration: index == 2 ? "underline" : "none" }}>About</span>
                </div>
                <div className="w-[100%] h-auto py-[5px] flex items-center justify-center cursor-pointer font-heading text-white"
                    key={3}
                    onClick={() => {
                        setIndex(3);
                        setTimeout(() => {
                            document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
                        }, 500);
                        onClose();
                    }}
                >
                    <span style={{ textDecoration: index == 3 ? "underline" : "none" }}>Contact</span>
                </div>

            </div>
        </Dialog>
    )
}

export default DialogNavbar