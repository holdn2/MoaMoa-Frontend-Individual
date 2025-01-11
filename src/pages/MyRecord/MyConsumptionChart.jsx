import React from "react";
import { Bar, ComposedChart, Line, XAxis, YAxis } from "recharts";

const MyConsumptionChart = ({ data }) => {
  const minValue = Math.min(data.slice(1));
  const maxValue = Math.max(data.slice(1));
  const padding = (maxValue - minValue) * 0.1;
  const yAxisMax = maxValue + padding;
  const generateSubText = (item) => {
    if (!item) return "";
    return `${((item.cons / item.target) * 100).toFixed(1)}%`;

    /*
    let color;
    color = subText > 100 ? "#FF0000" : "#0033FF";
    return { subText: subText + "%", color: color };
    */
  };
  return (
    <div>
      <ComposedChart width={313} height={192} data={data}>
        <XAxis
          dataKey="name" // x축에 들어갈 내용
          axisLine={false} // 축 선 제거
          tickLine={false} // 눈금 선 제거
          tick={{
            // x축 폰트
            fontFamily: "Pretendard",
            fontSize: 16,
            fontWeight: 700,
          }}
        />
        <XAxis
          xAxisId="sub"
          dataKey={generateSubText}
          axisLine={false} // 축 선 제거
          tickLine={false} // 눈금 선 제거
          tick={{
            fontSize: 12,
            fontFamily: "Inter",
            fontWeight: 700,
            fill: "#0033FF",
          }}
        />
        <YAxis domain={[0, yAxisMax]} hide />
        <Bar
          dataKey="target"
          barSize={41}
          fill="#61D8FF"
          radius={[12, 12, 0, 0]}
        />
        <Line type="monotone" dataKey="cons" stroke="#005FA4" />
      </ComposedChart>
    </div>
  );
};

export default MyConsumptionChart;
