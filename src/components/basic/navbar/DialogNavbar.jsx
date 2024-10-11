import { Dialog } from "@mui/material"


const DialogNavbar = ({ open, onClose, setIndex, setAboutvisibility }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            sx={{
                backgroundColor: "transparent",
                backdropFilter: "Brightness(100%) contrast(100%)",
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
                    backgroundColor: "white"
                }
            }}
        >
            <div className="w-[200px] h-auto border rounded-[10px] py-[10px]">
                <div className="w-[100%] h-auto py-[5px] flex items-center justify-center cursor-pointer font-bold"
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
                <div className="w-[100%] h-auto py-[5px] flex items-center justify-center cursor-pointer font-bold"
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
                <div className="w-[100%] h-auto py-[5px] flex items-center justify-center cursor-pointer font-bold"
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
                <div className="w-[100%] h-auto py-[5px] flex items-center justify-center cursor-pointer font-bold"
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