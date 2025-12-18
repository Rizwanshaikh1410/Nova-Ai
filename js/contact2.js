/**
 * contact2.js
 * Purpose: Prefill Contact Form fields from URL parameters
 * Safe for Netlify Forms (no submit / validation interference)
 */

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    if (!form) return;

    const params = new URLSearchParams(window.location.search);

    // Helper to safely set value
    const setValue = (id, value) => {
        const el = document.getElementById(id);
        if (el && value) {
            el.value = value;
        }
    };

    // Prefill basic fields
    setValue("name", params.get("name"));
    setValue("email", params.get("email"));
    setValue("message", params.get("message"));

    // Subject handling
    const subjectParam = params.get("subject");
    const subjectSelect = document.getElementById("subject");
    const customSubjectContainer = document.getElementById("customSubjectContainer");
    const customSubjectInput = document.getElementById("customSubject");

    if (subjectParam && subjectSelect) {
        let matched = false;

        // Try matching predefined subjects
        for (let option of subjectSelect.options) {
            if (option.value.toLowerCase() === subjectParam.toLowerCase()) {
                subjectSelect.value = option.value;
                matched = true;
                break;
            }
        }

        // If no match → use "Other"
        if (!matched) {
            subjectSelect.value = "Other";

            if (customSubjectContainer && customSubjectInput) {
                customSubjectContainer.classList.remove("d-none");
                customSubjectInput.value = subjectParam;
                customSubjectInput.required = true;
            }
        }
    }
});
