import { getLCP, getFID, getCLS } from 'https://unpkg.com/web-vitals?module';

function reportVitals(metric) {
    document.getElementById(metric.name.toLowerCase()).textContent = metric.value.toFixed(2);
}

getLCP(reportVitals);
getFID(reportVitals);
getCLS(reportVitals);