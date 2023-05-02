import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <div className={styles.boards} data-coord="1,1">
          11
          <pushbutton />
        </div>
        <div className={styles.boards} data-coord="2,1">
          21
          <pushbutton />
        </div>
        <div className={styles.boards} data-coord="3,1">
          31
          <pushbutton />
        </div>
        <div className={styles.boards} data-coord="4,1">
          41
          <pushbutton />
        </div>
        <div className={styles.boards} data-coord="5,1">
          51
          <pushbutton />
        </div>
        <div className={styles.boards} data-coord="6,1">
          61
          <pushbutton />
        </div>
        <div className={styles.boards} data-coord="7,1">
          71
          <pushbutton />
        </div>
        <div className={styles.boards} data-coord="8,1">
          81
          <pushbutton />
        </div>
        <div className={styles.boards} data-coord="1,2">
          12
        </div>
        <div className={styles.boards} data-coord="2,2">
          22
        </div>
        <div className={styles.boards} data-coord="3,2">
          32
        </div>
        <div className={styles.boards} data-coord="4,2">
          42
        </div>
        <div className={styles.boards} data-coord="5,2">
          52
        </div>
        <div className={styles.boards} data-coord="6,2">
          62
        </div>
        <div className={styles.boards} data-coord="7,2">
          72
        </div>
        <div className={styles.boards} data-coord="8,2">
          82
        </div>
        <div className={styles.boards} data-coord="1,3">
          13
        </div>
        <div className={styles.boards} data-coord="2,3">
          23
        </div>
        <div className={styles.boards} data-coord="3,3">
          33
        </div>
        <div className={styles.boards} data-coord="4,3">
          43
        </div>
        <div className={styles.boards} data-coord="5,3">
          53
        </div>
        <div className={styles.boards} data-coord="6,3">
          63
        </div>
        <div className={styles.boards} data-coord="7,3">
          73
        </div>
        <div className={styles.boards} data-coord="8,3">
          83
        </div>
        <div className={styles.boards} data-coord="1,4">
          14
        </div>
        <div className={styles.boards} data-coord="2,4">
          24
        </div>
        <div className={styles.boards} data-coord="3,4">
          34
        </div>
        <div className={styles.boards} data-coord="4,4">
          44
        </div>
        <div className={styles.boards} data-coord="5,4">
          54
        </div>
        <div className={styles.boards} data-coord="6,4">
          64
        </div>
        <div className={styles.boards} data-coord="7,4">
          74
        </div>
        <div className={styles.boards} data-coord="8,4">
          84
        </div>
        <div className={styles.boards} data-coord="1,5">
          15
        </div>
        <div className={styles.boards} data-coord="2,5">
          25
        </div>
        <div className={styles.boards} data-coord="3,5">
          35
        </div>
        <div className={styles.boards} data-coord="4,5">
          45
        </div>
        <div className={styles.boards} data-coord="5,5">
          55
        </div>
        <div className={styles.boards} data-coord="6,5">
          65
        </div>
        <div className={styles.boards} data-coord="7,5">
          75
        </div>
        <div className={styles.boards} data-coord="8,5">
          85
        </div>
        <div className={styles.boards} data-coord="1,6">
          16
        </div>
        <div className={styles.boards} data-coord="2,6">
          26
        </div>
        <div className={styles.boards} data-coord="3,6">
          36
        </div>
        <div className={styles.boards} data-coord="4,6">
          46
        </div>
        <div className={styles.boards} data-coord="5,6">
          56
        </div>
        <div className={styles.boards} data-coord="6,6">
          66
        </div>
        <div className={styles.boards} data-coord="7,6">
          76
        </div>
        <div className={styles.boards} data-coord="8,6">
          86
        </div>
        <div className={styles.boards} data-coord="1,7">
          17
        </div>
        <div className={styles.boards} data-coord="2,7">
          27
        </div>
        <div className={styles.boards} data-coord="3,7">
          37
        </div>
        <div className={styles.boards} data-coord="4,7">
          47
        </div>
        <div className={styles.boards} data-coord="5,7">
          57
        </div>
        <div className={styles.boards} data-coord="6,7">
          67
        </div>
        <div className={styles.boards} data-coord="7,7">
          77
        </div>
        <div className={styles.boards} data-coord="8,7">
          87
        </div>
        <div className={styles.boards} data-coord="1,8">
          18
        </div>
        <div className={styles.boards} data-coord="2,8">
          28
        </div>
        <div className={styles.boards} data-coord="3,8">
          38
        </div>
        <div className={styles.boards} data-coord="4,8">
          48
        </div>
        <div className={styles.boards} data-coord="5,8">
          58
        </div>
        <div className={styles.boards} data-coord="6,8">
          68
        </div>
        <div className={styles.boards} data-coord="7,8">
          78
        </div>
        <div className={styles.boards} data-coord="8,8">
          88
        </div>
      </div>
    </div>
  );
};

export default Home;

function pushbutton() {
  const count = 1;
  return <span>まずはボタンから{count}</span>;
}
