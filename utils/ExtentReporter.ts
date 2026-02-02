import * as fs from 'fs';
import * as path from 'path';

export class ExtentReporter {
  private static reportPath = 'test-results/extent-report.html';
  private static testResults: any[] = [];

  static initReport() {
    const reportDir = path.dirname(this.reportPath);
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
  }

  static addTest(testName: string, status: string, steps: string[], screenshots: string[]) {
    this.testResults.push({
      testName,
      status,
      steps,
      screenshots,
      timestamp: new Date().toISOString()
    });
  }

  static generateReport() {
    const escapeHtml = (text: string) => {
      return text.replace(/&/g, '&amp;')
                 .replace(/</g, '&lt;')
                 .replace(/>/g, '&gt;')
                 .replace(/"/g, '&quot;')
                 .replace(/'/g, '&#39;');
    };

    const html = `
<!DOCTYPE html>
<html>
<head>
    <title>E-Commerce Automation Test Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .header { background: #2c3e50; color: white; padding: 20px; border-radius: 5px; }
        .summary { background: white; padding: 20px; margin: 20px 0; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .test-case { background: white; margin: 20px 0; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .passed { border-left: 5px solid #27ae60; }
        .failed { border-left: 5px solid #e74c3c; }
        .step { margin: 10px 0; padding: 10px; background: #ecf0f1; border-radius: 3px; }
        .screenshot { margin: 10px 0; }
        .screenshot img { max-width: 300px; border: 1px solid #ddd; border-radius: 3px; cursor: pointer; }
        .status-passed { color: #27ae60; font-weight: bold; }
        .status-failed { color: #e74c3c; font-weight: bold; }
    </style>
</head>
<body>
    <div class="header">
        <h1>E-Commerce Automation Test Report</h1>
        <p>Generated on: ${new Date().toLocaleString()}</p>
    </div>
    
    <div class="summary">
        <h2>Test Summary</h2>
        <p><strong>Total Tests:</strong> ${this.testResults.length}</p>
        <p><strong>Passed:</strong> <span class="status-passed">${this.testResults.filter(t => t.status === 'passed').length}</span></p>
        <p><strong>Failed:</strong> <span class="status-failed">${this.testResults.filter(t => t.status === 'failed').length}</span></p>
    </div>

    ${this.testResults.map(test => `
    <div class="test-case ${test.status}">
        <h3>${escapeHtml(test.testName)} - <span class="status-${test.status}">${test.status.toUpperCase()}</span></h3>
        <p><strong>Execution Time:</strong> ${test.timestamp}</p>
        
        <h4>Test Steps:</h4>
        ${test.steps.map((step: string) => `<div class="step">${escapeHtml(step)}</div>`).join('')}
        
        <h4>Screenshots:</h4>
        ${test.screenshots.map((screenshot: string) => `
        <div class="screenshot">
            <p><strong>${path.basename(screenshot)}</strong></p>
            <img src="${screenshot}" alt="Screenshot" onclick="window.open('${screenshot}', '_blank')">
        </div>
        `).join('')}
    </div>
    `).join('')}
</body>
</html>`;

    fs.writeFileSync(this.reportPath, html);
    console.log(`Extent Report generated: ${this.reportPath}`);
  }
}