export function Button() {
    const handleDownload = () => {
        // Create a link element to trigger download
        const link = document.createElement('a');
        link.href = '/Tashan_Gillem_Resume_SWE_Backend.pdf';
        link.download = 'Tashan_Gillem_Resume_SWE_Backend.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button 
            className="button-primary"
            onClick={handleDownload}
        >
            <span>Download Resume</span>
        </button>
    )
}