function normalizeJsBasicsLabel(label) {
  let result = "";

  for (let ch of label.trim().toLowerCase()) { 

    if ((ch >= "a" && ch <= "z") ||
      (ch >= "0" && ch <= "9")) {
      result += ch;
    }
    else if (result.length > 0 && result[result.length - 1] !== "-") { 
      result += "-";
    }

  }

  if (result.endsWith("-")) { result = result.slice(0, -1); }

  if (result === "") {
  return "js-basic";
}

  return "js-basic-" + result;
}

function isValidJsBasicsIdentifier(name) {
  name = name.trim();
  if (name == "") { return false; }

  if (name == "let" || name == "const" || name == "var" || name == "class" ||
    name == "function" || name == "return") { 
    return false;
  }

  let first = name[0];

  if (!((first >= "a" && first <= "z") || (first >= "A" && first <= "Z") || first == "_" || first == "$")) { return false; }

  return true;
}

function classifyJsBasicsScore(score) {
  if (score >= 90) {
    return "EXCELLENT";
  } else if (score >= 75) {
    return "GOOD";
  } else if (score >= 50) {
    return "NEEDS_PRACTICE";
  } else { 
    return "REVISIT";
  }
}

function getJsBasicsKeywordMeaning(term) {
  term = term.trim().toLowerCase();

  const map = {
    node: "runtime",
    v8: "engine",
    npm: "package-manager"
  };

  return map[term] || "unknown";
}

function filterSupportedJsBasicsTopics(topics) {
  // write your code here
  const map = {
    node: "node",
    runtime: "node",
    v8: "v8",
    engine: "v8",
    npm: "npm",
    "package-manager": "npm"
  };

  let result = [];

  for (let topic of topics) {
    topic = topic.trim().toLowerCase();

    if (map[topic]) {
      let value = map[topic];

      if (!result.includes(value)) {
        result.push(value);
      }
    }
  }

  return result;
}

function countPassingJsBasicsChecks(results) {
let count = 0;

  for (let result of results) {
    if (result.toLowerCase().includes("pass")) {
      count++;
    }
  }

  return count;

}

function summarizeJsBasicsResults(results) {
  // write your code here

  let passed = 0, failed = 0, skipped = 0;

  for (let result of results) { 
    result = result.toLowerCase();

    if (result.includes("pass")) {
      passed++;
    } else if (result.includes("fail")) {
      failed++;
    } else if (result.includes("skip")) {
      skipped++;
    }
  }

  return {
    total: results.length,
    passed: passed,
    failed: failed,
    skipped: skipped
  };
}

function mergeJsBasicsConfig(defaultConfig, overrideConfig) {
  let result = {};

  for (let key in defaultConfig) {
    result[key] = defaultConfig[key];
  }

  for (let key in overrideConfig) {
    result[key] = overrideConfig[key];
  }

  if (result.retries === undefined) {
    result.retries= 0;
  }

  return result;
}

function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
  return suiteName.trim() + " | " + environment.trim().toLowerCase() + " | build-" + buildNumber;
}
