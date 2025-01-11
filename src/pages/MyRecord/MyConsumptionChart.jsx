import React from "react";
import { Bar, ComposedChart, Line, XAxis, YAxis } from "recharts";

const MyConsumptionChart = ({ data }) => {
  const minValue = Math.min(...data.map((item) => item.cons));
  const maxValue = Math.max(...data.map((item) => item.cons));
  const padding = (maxValue - minValue) * 0.1;
  const yAxisMax = maxValue + padding;

  // subText와 color를 함께 반환하는 함수로 수정
  const generateSubText = (item) => {
    if (!item) return { subText: "", color: "#0033FF" };
    const subText = ((item.cons / item.target) * 100).toFixed(1);
    const color = subText > 100 ? "#FF0000" : "#0033FF";
    return { subText: `${subText}%`, color };
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
          dataKey={(item) => generateSubText(item).subText} // subText만 추출(없어도 subText 출력되긴 함)
          axisLine={false} // 축 선 제거
          tickLine={false} // 눈금 선 제거
          interval={0} // 모든 텍스트 표시
          tick={({ payload, x, y }) => {
            const item = data[payload.index];
            const { subText, color } = generateSubText(item);
            return (
              <text
                x={x}
                y={y}
                fontSize={12}
                fontFamily="Inter"
                fontWeight={700}
                fill={color} // 여기서 색상 적용
                textAnchor="middle"
              >
                {subText}
              </text>
            );
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
