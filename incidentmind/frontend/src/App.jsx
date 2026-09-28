import { useState } from "react";

const incidents = [
  {
    id: "INC-017",
    title: "Payment API Failure",
    service: "Payment API",
    severity: "Critical",
    status: "Investigating",
    time: "2 min ago",
    description:
      "Payment requests are failing because the database connection pool is exhausted.",
    symptoms: [
      "Payment API returning 500 errors",
      "Database connection pool at 100%",
      "Request latency increased",
      "Multiple payment retries detected",
    ],
    diagnosis: {
      rootCause: "Database connection pool exhaustion",
      confidence: "High",
      explanation:
        "The payment service has exhausted its available database connections, causing new requests to fail.",
    },
    memory: {
      incident: "INC-009",
      title: "Payment Service Connection Failure",
      similarity: "92%",
      resolution:
        "Restart service and increase the database connection pool limit.",
    },
    recommendation:
      "Increase the database connection pool limit and restart the affected payment service.",
  },
  {
    id: "INC-018",
    title: "Authentication Service Delay",
    service: "Auth Service",
    severity: "High",
    status: "Investigating",
    time: "8 min ago",
    description:
      "Authentication requests are experiencing increased response times.",
    symptoms: [
      "Login response time increased",
      "Authentication requests timing out",
      "CPU usage increased",
    ],
    diagnosis: {
      rootCause: "Under investigation",
      confidence: "Medium",
      explanation:
        "The available evidence is not yet sufficient to determine a confirmed root cause.",
    },
    memory: null,
    recommendation:
      "Inspect authentication service CPU usage and review recent deployment activity.",
  },
  {
    id: "INC-019",
    title: "Notification Queue Delay",
    service: "Notification Service",
    severity: "Medium",
    status: "Monitoring",
    time: "21 min ago",
    description:
      "Notification processing is slower than the expected service threshold.",
    symptoms: [
      "Queue depth increased",
      "Email delivery delayed",
      "Worker processing rate decreased",
    ],
    diagnosis: {
      rootCause: "Worker processing slowdown",
      confidence: "Medium",
      explanation:
        "Notification workers are processing messages below the normal throughput.",
    },
    memory: null,
    recommendation:
      "Monitor worker throughput and inspect queue processing metrics.",
  },
];

function App() {
  const [selectedIncident, setSelectedIncident] = useState(incidents[0]);
  const [resolved, setResolved] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  const selectIncident = (incident) => {
    setSelectedIncident(incident);
    setResolved(false);
    setActiveTab("Overview");
  };

  const handleResolve = () => {
    setResolved(true);
  };

  return (
    <div className="app">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">⚡</div>

          <div>
            <h1>IncidentMind</h1>
            <span>AI Incident Response</span>
          </div>
        </div>

        <nav className="navigation">
          <button className="nav-item active">
            <span>🚨</span>
            Incidents
          </button>

          <button className="nav-item">
            <span>🧠</span>
            Team Memory
          </button>

          <button className="nav-item">
            <span>📊</span>
            Analytics
          </button>

          <button className="nav-item">
            <span>⚙️</span>
            Settings
          </button>
        </nav>

        <div className="system-status">
          <div className="status-dot"></div>

          <div>
            <strong>System Online</strong>
            <span>All services operational</span>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="main">
        {/* HEADER */}
        <header className="topbar">
          <div>
            <p className="eyebrow">INCIDENT OPERATIONS</p>
            <h2>Incident Response Center</h2>
          </div>

          <div className="topbar-right">
            <div className="live-indicator">
              <span></span>
              LIVE
            </div>

            <div className="user-avatar">YK</div>
          </div>
        </header>

        {/* SUMMARY */}
        <section className="summary-grid">
          <div className="summary-card">
            <div className="summary-icon red">🚨</div>

            <div>
              <span>Active Incidents</span>
              <strong>3</strong>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon orange">⚠️</div>

            <div>
              <span>Critical</span>
              <strong>1</strong>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon blue">🤖</div>

            <div>
              <span>AI Investigations</span>
              <strong>2</strong>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon green">✓</div>

            <div>
              <span>Resolved Today</span>
              <strong>7</strong>
            </div>
          </div>
        </section>

        {/* CONTENT GRID */}
        <section className="workspace">
          {/* INCIDENT LIST */}
          <section className="incident-panel panel">
            <div className="panel-header">
              <div>
                <h3>Incident Feed</h3>
                <p>Live system incidents</p>
              </div>

              <span className="count-badge">{incidents.length}</span>
            </div>

            <div className="incident-list">
              {incidents.map((incident) => {
                const isSelected = selectedIncident.id === incident.id;

                return (
                  <button
                    key={incident.id}
                    className={`incident-item ${
                      isSelected ? "selected" : ""
                    }`}
                    onClick={() => selectIncident(incident)}
                  >
                    <div className="incident-item-top">
                      <span
                        className={`severity-dot ${incident.severity.toLowerCase()}`}
                      ></span>

                      <span className="incident-id">{incident.id}</span>

                      <span
                        className={`severity ${incident.severity.toLowerCase()}`}
                      >
                        {incident.severity}
                      </span>
                    </div>

                    <h4>{incident.title}</h4>

                    <div className="incident-meta">
                      <span>{incident.service}</span>
                      <span>•</span>
                      <span>{incident.time}</span>
                    </div>

                    <div className="incident-status">
                      <span className="small-status-dot"></span>
                      {incident.status}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* DETAILS */}
          <section className="details-panel">
            {/* INCIDENT HEADER */}
            <div className="incident-header panel">
              <div>
                <div className="breadcrumb">
                  Incidents <span>/</span> {selectedIncident.id}
                </div>

                <div className="title-row">
                  <h2>{selectedIncident.title}</h2>

                  <span
                    className={`severity large ${selectedIncident.severity.toLowerCase()}`}
                  >
                    {selectedIncident.severity}
                  </span>
                </div>

                <p>{selectedIncident.description}</p>
              </div>

              <div className="incident-number">
                <span>Incident</span>
                <strong>{selectedIncident.id}</strong>
              </div>
            </div>

            {/* TABS */}
            <div className="tabs">
              {["Overview", "Timeline", "Evidence"].map((tab) => (
                <button
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === "Overview" && (
              <>
                {/* AI STATUS */}
                <div className="ai-status panel">
                  <div className="ai-status-icon">🤖</div>

                  <div className="ai-status-content">
                    <div className="ai-status-title">
                      <strong>IncidentMind AI</strong>

                      <span className="thinking-badge">
                        {resolved ? "Resolution Verified" : "Investigation Active"}
                      </span>
                    </div>

                    <p>
                      {resolved
                        ? "The recommended remediation was approved and the incident is now marked for monitoring."
                        : "AI agent is analyzing symptoms, evidence and historical incidents."}
                    </p>
                  </div>

                  <div className="ai-pulse">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                {/* TWO COLUMN */}
                <div className="analysis-grid">
                  {/* DIAGNOSIS */}
                  <div className="panel diagnosis-card">
                    <div className="card-heading">
                      <div>
                        <span className="section-label">AI ANALYSIS</span>
                        <h3>Diagnosis</h3>
                      </div>

                      <span className="confidence">
                        {selectedIncident.diagnosis.confidence} confidence
                      </span>
                    </div>

                    <div className="root-cause">
                      <span>Probable Root Cause</span>

                      <strong>
                        {selectedIncident.diagnosis.rootCause}
                      </strong>
                    </div>

                    <p className="analysis-text">
                      {selectedIncident.diagnosis.explanation}
                    </p>

                    <div className="evidence-list">
                      <h4>Observed Symptoms</h4>

                      {selectedIncident.symptoms.map((symptom, index) => (
                        <div className="evidence-row" key={index}>
                          <span className="check">✓</span>
                          <span>{symptom}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* MEMORY */}
                  <div className="panel memory-card">
                    <div className="card-heading">
                      <div>
                        <span className="section-label">TEAM MEMORY</span>
                        <h3>Memory Match</h3>
                      </div>

                      <span className="memory-icon">🧠</span>
                    </div>

                    {selectedIncident.memory ? (
                      <>
                        <div className="memory-match">
                          <div className="memory-score">
                            {selectedIncident.memory.similarity}
                          </div>

                          <div>
                            <span>Historical similarity</span>
                            <strong>
                              {selectedIncident.memory.incident}
                            </strong>
                          </div>
                        </div>

                        <div className="memory-content">
                          <h4>{selectedIncident.memory.title}</h4>

                          <p>
                            Previous resolution:
                          </p>

                          <div className="fix-box">
                            🔧 {selectedIncident.memory.resolution}
                          </div>
                        </div>

                        <button className="secondary-button">
                          View Previous Incident →
                        </button>
                      </>
                    ) : (
                      <div className="no-memory">
                        <div>🔍</div>
                        <strong>No strong historical match</strong>
                        <p>
                          No relevant previous incident was found in team
                          memory.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* RECOMMENDATION */}
                <div className="panel recommendation">
                  <div className="recommendation-icon">💡</div>

                  <div className="recommendation-content">
                    <span className="section-label">RECOMMENDED ACTION</span>

                    <h3>AI Recommendation</h3>

                    <p>{selectedIncident.recommendation}</p>

                    <div className="recommendation-actions">
                      <button
                        className="approve-button"
                        onClick={handleResolve}
                        disabled={resolved}
                      >
                        {resolved
                          ? "✓ Action Approved"
                          : "✓ Approve & Execute"}
                      </button>

                      <button className="secondary-button">
                        Review Evidence
                      </button>
                    </div>
                  </div>
                </div>

                {/* ENGINEER ACTION */}
                <div className="panel engineer-action">
                  <div className="engineer-icon">👨‍💻</div>

                  <div>
                    <span className="section-label">ENGINEER ACTION</span>
                    <h3>Human-in-the-Loop</h3>

                    <p>
                      Engineer approval is required before applying the
                      recommended remediation.
                    </p>
                  </div>

                  <div className="action-status">
                    <span className={resolved ? "done" : "pending"}>
                      {resolved ? "APPROVED" : "PENDING"}
                    </span>
                  </div>
                </div>

                {/* RESOLUTION */}
                <div
                  className={`resolution ${
                    resolved ? "resolved" : "monitoring"
                  }`}
                >
                  <div className="resolution-icon">
                    {resolved ? "✓" : "◷"}
                  </div>

                  <div>
                    <strong>
                      {resolved
                        ? "Resolution Action Approved"
                        : "Awaiting Resolution"}
                    </strong>

                    <p>
                      {resolved
                        ? "Incident remediation has been approved. Continue monitoring service health."
                        : "AI recommendation is ready for engineer review and approval."}
                    </p>
                  </div>

                  <span className="resolution-status">
                    {resolved ? "RESOLVED" : "PENDING"}
                  </span>
                </div>
              </>
            )}

            {activeTab === "Timeline" && (
              <div className="panel timeline-panel">
                <div className="card-heading">
                  <div>
                    <span className="section-label">INCIDENT HISTORY</span>
                    <h3>Investigation Timeline</h3>
                  </div>
                </div>

                <div className="timeline">
                  <TimelineItem
                    time="10:32:14"
                    title="Incident detected"
                    text="Monitoring system detected abnormal payment API failures."
                    type="alert"
                  />

                  <TimelineItem
                    time="10:33:02"
                    title="AI investigation started"
                    text="IncidentMind began analysing available evidence."
                    type="ai"
                  />

                  <TimelineItem
                    time="10:34:18"
                    title="Database evidence found"
                    text="Connection pool utilization reached 100%."
                    type="evidence"
                  />

                  <TimelineItem
                    time="10:35:41"
                    title="Historical incident matched"
                    text="INC-009 identified as a similar previous incident."
                    type="memory"
                  />

                  <TimelineItem
                    time="10:36:10"
                    title="Recommendation generated"
                    text="AI generated a remediation recommendation for engineer approval."
                    type="recommendation"
                  />
                </div>
              </div>
            )}

            {activeTab === "Evidence" && (
              <div className="evidence-grid">
                <div className="panel">
                  <span className="section-label">SERVICE METRICS</span>
                  <h3>Evidence</h3>

                  <div className="metric-list">
                    <Metric label="Error Rate" value="42.8%" danger />
                    <Metric label="Request Latency" value="2.8s" danger />
                    <Metric label="DB Connections" value="100%" danger />
                    <Metric label="CPU Usage" value="71%" />
                    <Metric label="Memory Usage" value="64%" />
                  </div>
                </div>

                <div className="panel">
                  <span className="section-label">TOOL ACTIVITY</span>
                  <h3>Investigation Tools</h3>

                  <div className="tool-list">
                    <Tool name="Metrics Query" status="Completed" />
                    <Tool name="Log Search" status="Completed" />
                    <Tool name="Database Check" status="Completed" />
                    <Tool name="Memory Search" status="Completed" />
                  </div>
                </div>
              </div>
            )}
          </section>
        </section>
      </main>
    </div>
  );
}

function TimelineItem({ time, title, text, type }) {
  return (
    <div className="timeline-item">
      <div className={`timeline-marker ${type}`}></div>

      <div className="timeline-content">
        <div className="timeline-top">
          <strong>{title}</strong>
          <span>{time}</span>
        </div>

        <p>{text}</p>
      </div>
    </div>
  );
}

function Metric({ label, value, danger }) {
  return (
    <div className="metric">
      <span>{label}</span>
      <strong className={danger ? "danger-value" : ""}>{value}</strong>
    </div>
  );
}

function Tool({ name, status }) {
  return (
    <div className="tool">
      <div className="tool-name">
        <span className="tool-dot"></span>
        {name}
      </div>

      <span className="tool-status">{status}</span>
    </div>
  );
}

export default App;