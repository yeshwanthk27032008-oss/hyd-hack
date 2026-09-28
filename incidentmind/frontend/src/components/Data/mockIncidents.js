export const incidents = [
  {
    id: "INC-017",
    title: "Payment API Failure",
    severity: "Critical",
    service: "Payment API",
    status: "Investigating",
    timestamp: "10:42 AM",

    description:
      "Payment requests are failing because the service is unable to obtain database connections.",

    agentStatus: "Investigating incident",

    timeline: [
      {
        time: "10:42",
        title: "Incident detected",
        description: "Payment API error rate increased."
      },
      {
        time: "10:44",
        title: "Evidence collected",
        description: "Multiple database connection errors found."
      },
      {
        time: "10:46",
        title: "Pattern identified",
        description: "Connection pool exhaustion detected."
      },
      {
        time: "10:48",
        title: "Memory consulted",
        description: "Similar previous incident found."
      }
    ],

    evidence: [
      "Database connection timeout",
      "Connection pool at 100% capacity",
      "Payment API error rate increased"
    ],

    diagnosis: {
      rootCause: "Database connection pool exhaustion",
      confidence: "High"
    },

    memoryMatch: {
      found: true,
      incidentId: "INC-009",
      similarity: "High",
      diagnosis: "Database connection pool exhaustion",
      resolution: "Restart service and increase connection pool limit"
    },

    recommendation:
      "Restart the affected service and increase the database connection pool capacity.",

    toolActivity: [
      "Checked payment service logs",
      "Checked database connection status",
      "Compared current error pattern with previous incidents"
    ],

    actions: [
      "Restart affected service",
      "Increase connection pool capacity"
    ],

    verification: {
      status: "Pending",
      message: "Waiting for remediation to complete."
    }
  },

  {
    id: "INC-018",
    title: "Authentication Service Delay",
    severity: "High",
    service: "Auth Service",
    status: "Investigating",
    timestamp: "10:25 AM",

    description:
      "Authentication requests are taking longer than expected.",

    agentStatus: "Collecting evidence",

    timeline: [
      {
        time: "10:25",
        title: "Incident detected",
        description: "Authentication latency increased."
      },
      {
        time: "10:27",
        title: "Investigation started",
        description: "Agent is checking authentication service logs."
      }
    ],

    evidence: [
      "Authentication latency increased",
      "Multiple slow requests detected"
    ],

    diagnosis: {
      rootCause: "Under investigation",
      confidence: "Medium"
    },

    memoryMatch: {
      found: false
    },

    recommendation:
      "Continue investigation and inspect authentication service dependencies.",

    toolActivity: [
      "Checked authentication logs",
      "Checked service response time"
    ],

    actions: [
      "Acknowledge incident",
      "Continue investigation"
    ],

    verification: {
      status: "Pending",
      message: "Investigation is still in progress."
    }
  }
];
