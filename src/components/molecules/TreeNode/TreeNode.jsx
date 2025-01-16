import { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { FileIcon } from "../../atoms/FileIcon/Fileicon";

export const TreeNodeFile = ({ fileFolderData }) => {
    const [visibility, setVisibility] = useState({});

    function toggleVisibility(name) {
        setVisibility({
            ...visibility,
            [name]: !visibility[name],
        });
    }

    return (
        fileFolderData && (
            <div style={{ paddingLeft: "15px", color: "black" }}>
                {fileFolderData.children ? (
                    <>
                        <button
                            style={{
                                border: "none",
                                cursor: "pointer",
                                outline: "none",
                                color: "white",
                               backgroundColor:"transparent",
                                paddingTop: "15px",
                                fontSize: "16px",
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                            }}
                            onClick={() => toggleVisibility(fileFolderData.name)}
                        >
                            {visibility[fileFolderData.name] ? (
                                <IoIosArrowDown style={{ height: "10px", width: "10px" }} />
                            ) : (
                                <IoIosArrowForward style={{ height: "10px", width: "10px" }} />
                            )}
                            {fileFolderData.name}
                        </button>
                        {visibility[fileFolderData.name] && fileFolderData.children &&
                            fileFolderData.children.map((child) => (
                                <TreeNodeFile key={child.name} fileFolderData={child} />
                            ))}
                    </>
                ) : (
                    <div style={{display:'flex', alignItems:'center'}}>
                    <FileIcon extension={fileFolderData.name.split('.')[1]}/>
                    <p
                        style={{
                          
                            fontSize: "15px",
                            cursor: "pointer",
                            marginLeft: "5px",
                            // backgroundColor:'black',
                            color:'white'
                        }}
                    >
                        {fileFolderData.name}
                    </p>
                    </div>
                )
                }
            </div>
        )
    );
};
