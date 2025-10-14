document.getElementById("downloadCV").addEventListener("click", async () => {
    try {
        const resp = await fetch("resume/");
        const text = await resp.text();

        const matches = [...text.matchAll(/href="([^"]+\.(pdf|docx|doc))"/gi)];
        if (!matches.length) {
            alert("No resume file found in the folder.");
            return;
        }

        let href = matches[matches.length - 1][1];

        // function normalizeResumeHref(href) {
        //     try {
        //         const candidate = new URL(href);
        //         return candidate.href;
        //     } catch { }
        //     href = href.replace(/^\/+/, '');
        //     const basename = href.split("/").pop();
        //     return `${window.location.origin}/resume/${encodeURIComponent(basename)}`;
        // }

        // const finalUrl = normalizeResumeHref(href);

        // ✅ Open in new tab (no download)
        window.open(href, "_blank", "noopener,noreferrer");
    } catch (err) {
        console.error(err);
        alert("Could not fetch resume file. See console for details.");
    }
});
