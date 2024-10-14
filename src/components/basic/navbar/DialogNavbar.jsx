import { Dialog } from "@mui/material"


const DialogNavbar = ({ open, onClose, setIndex, setAboutvisibility }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
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
                    background: "linear-gradient(to right,rgba(26, 34, 90, 0.8),rgba(197, 204, 255, 0.6))",
                    backdropFilter: "blur(0px)",
                }
            }}
        >
            <div className="w-[200px] h-auto rounded-[10px] py-[10px]">
                <div className="w-[100%] h-auto py-[5px] flex items-center justify-center cursor-pointer font-bold text-white"
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
                    HOME
                </div>
                <div className="w-[100%] h-auto py-[5px] flex items-center justify-center cursor-pointer font-bold text-white"
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
                    SERVICES
                </div>
                <div className="w-[100%] h-auto py-[5px] flex items-center justify-center cursor-pointer font-bold text-white"
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
                    ABOUT
                </div>
                <div className="w-[100%] h-auto py-[5px] flex items-center justify-center cursor-pointer font-bold text-white"
                    key={3}
                    onClick={() => {
                        setIndex(3);
                        setTimeout(() => {
                            document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
                        }, 500);
                        onClose();
                    }}
                >
                    CONTACT
                </div>

            </div>
        </Dialog>
    )
}

export default DialogNavbar