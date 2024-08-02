function Options({ HappensCafé, Reset, totalFeedback }) {
  return (
    <div>
      <button type="button" onClick={() => HappensCafé("good")}>
        Good
      </button>
      <button type="button" onClick={() => HappensCafé("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => HappensCafé("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          type="button"
          onClick={() => {
            Reset();
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
