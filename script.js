// script.js

// Data for the timeline
const milestones = [
    { year: 2023, title: "Current AI Tools", description: "Introduction of AI tools like Sana Labs for personalized learning." },
    { year: 2025, title: "Virtual Tutors", description: "AI tutors begin supporting educators in classrooms globally." },
    { year: 2030, title: "AI Dashboards", description: "Real-time analytics for educators to track student engagement and outcomes." },
    { year: 2040, title: "Equitable Access", description: "AI tools become accessible in underserved communities worldwide." },
    { year: 2075, title: "Lifelong Learning AI", description: "Fully integrated AI systems support lifelong adaptive learning for all ages." }
  ];
  
  // Set up dimensions and margins
  const width = 800;
  const height = 200;
  const margin = { top: 20, right: 20, bottom: 40, left: 40 };
  
  // Create SVG
  const svg = d3
    .select("#timeline")
    .attr("width", width)
    .attr("height", height);
  
  // Create a scale for the timeline
  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(milestones, d => d.year))
    .range([margin.left, width - margin.right]);
  
  // Add axis
  const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));
  
  svg
    .append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(xAxis);
  
  // Add circles for milestones
  svg
    .selectAll("circle")
    .data(milestones)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d.year))
    .attr("cy", height / 2 - margin.top)
    .attr("r", 8)
    .attr("fill", "#007BFF")
    .on("mouseover", function (event, d) {
      d3.select("#info-box")
        .classed("hidden", false)
        .select("#info-title")
        .text(d.title);
  
      d3.select("#info-content").text(d.description);
    })
    .on("mouseout", function () {
      d3.select("#info-box").classed("hidden", true);
    });
  
  // Add labels for years
  svg
    .selectAll("text")
    .data(milestones)
    .enter()
    .append("text")
    .attr("x", d => xScale(d.year))
    .attr("y", height / 2 - margin.top - 15)
    .attr("text-anchor", "middle")
    .text(d => d.year)
    .style("font-size", "12px")
    .style("fill", "#333");
  