const video_data = [
  {
    video_len: "34:33",
    pos: "13:00",
    op_start: "00:55",
    op_end: "02:55",
    commands: ["next", "prev"],
    result: "13:00",
  },
  {
    video_len: "10:55",
    pos: "00:05",
    op_start: "00:15",
    op_end: "06:55",
    commands: ["prev", "next", "next"],
    result: "06:55",
  },
  {
    video_len: "07:22",
    pos: "04:05",
    op_start: "00:15",
    op_end: "04:07",
    commands: ["next"],
    result: "04:17",
  },
];

function solution({ video_len, pos, op_start, op_end, commands }) {
  const convert = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  function cTime(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    const a = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;

    return a;
  }

  const video = convert(video_len);
  const start = convert(op_start);
  const end = convert(op_end);
  let result = convert(pos);

  commands.map((command) => {
    if (start <= result && result <= end) {
      result = end;
    }
    switch (command) {
      case "next": // 10초후
        result = Math.min(result + 10, video);
        break;
      case "prev": // 10초전
        result = Math.max(result - 10, 0);
        break;
    }
  });
  if (start <= result && result <= end) {
    result = end;
  }
  return cTime(result);
}

solution(video_data[2]);
// const a =
