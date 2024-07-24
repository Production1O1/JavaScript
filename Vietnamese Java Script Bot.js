exports.currentTimeStamp = () => Math.floor(new Date().getTime() / 1000.0);


let list_task = [
  1646931600, 1647795600, 1648746000, 1649610000, 1650474000, 1651338000,
  1652202000, 1653066000, 1654016400, 1654880400, 1655744400, 1656608400,
  1657472400, 1658336400, 1659286800, 1660150800, 1661014800, 1661965200,
  1662829200, 1663693200, 1664557200, 1665421200, 1666285200, 1667235600,
  1668099600, 1668963600, 1669827600, 1670691600, 1671555600, 1672506000,
  1673370000, 1674234000, 1675184400, 1676048400, 1676912400, 1677603600,
  1678467600, 1679331600, 1680282000, 1681146000, 1682010000, 1682874000,
  1683738000, 1684602000, 1685552400, 1686416400, 1687280400, 1688144400,
  1689008400, 1689872400, 1690822800, 1691686800, 1692550800, 1693501200,
  1694365200, 1695229200, 1696093200, 1696957200, 1697821200, 1698771600,
  1699635600, 1700499600, 1701363600, 1702227600, 1703091600, 1704042000,
  1704906000, 1705770000, 1706720400, 1707584400, 1708448400, 1709226000,
  1710090000, 1710954000, 1711904400, 1712768400, 1713632400, 1714496400,
  1715360400, 1716224400, 1717174800, 1718038800, 1718902800
];


//https://www.epochconverter.com/

exports.getBeginningAndEndingTask = function (currentTime) {
  let getTime = list_task.filter((e) => e > currentTime);
  let ending = getTime[0];
  let beginning = list_task.indexOf(ending) - 1;
  beginning = list_task[beginning];
  return { beginning, ending, totalDay: (ending - beginning) / 86400 };
};

exports.getCurrentTask = function (currentTime) {
  let getCurrentTask = list_task.filter((e) => e > currentTime);
  getCurrentTask = getCurrentTask[0];
  let starting_task = 68;
  getCurrentTask = list_task.indexOf(getCurrentTask) + starting_task;
  let latestTask = list_task.length + starting_task;
  const myDate = (timeStampt) => {
    return new Date(timeStampt * 1000).toLocaleString("en-US", {
      timeZone: "Asia/Ho_Chi_Minh",
    });
  };

  console.log(
    "Current task: " + getCurrentTask + " - time: " + myDate(currentTime)
  );
