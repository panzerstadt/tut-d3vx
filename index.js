import React, { Component } from "react";
import { LinePath, Line, Bar } from "@vx/shape";
import { appleStock } from "@vx/mock-data";
import { scaleTime, scaleLinear } from "@vx/scale";
import { localPoint } from "@vx/event";
import { extent, max, bisector } from "d3-array";

// get data
const stock = appleStock.slice(800);

const xSelector = d => new Date(d.date);
const ySelector = d => d.close;
const bisectDate = bisector(xSelector).left;

render()