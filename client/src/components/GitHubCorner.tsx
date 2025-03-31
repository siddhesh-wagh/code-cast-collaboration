import { useSettings } from "@/context/SettingContext"
import useWindowDimensions from "@/hooks/useWindowDimensions"
import logo from "@/assets/clg.png" // Import your image

function GitHubCorner() {
    const { showGitHubCorner } = useSettings()
    const { width } = useWindowDimensions()

    return (
        showGitHubCorner &&
        width > 640 && (
            <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="github-corner"
                style={{
                    position: "absolute",
                    top: 0,
                    right: 5,
                    zIndex: 10,
                    fontSize: "10px",
                    fontWeight: "bold",
                    fontFamily: "Constantia, serif",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px",
                    backgroundColor: "#24292e",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "5px",
                }}
            >
                <img
                    src={logo}
                    alt="Logo"
                    style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "20%",
                    }}
                />
                {/* Center "AC Patil" and put "College of Engineering" below */}
                <span
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                    }}
                >
                    <span style={{ fontSize: "10px", fontWeight: "bold" }}>
                        AC Patil
                    </span>
                    <span style={{ fontSize: "10px" }}>
                        College of Engineering
                    </span>
                </span>
            </a>
        )
    )
}

export default GitHubCorner
