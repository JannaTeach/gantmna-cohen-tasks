import { useState } from "react";

const guests = [
  { name: "מוטי ארליך", group: "משפחה מורחבת", side: "אגם" },
  { name: "אייל ארליך", group: "משפחה מורחבת", side: "אגם" },
  { name: "ניר ארליך", group: "משפחה מורחבת", side: "אגם" },
  { name: "עומרי ארליך", group: "משפחה מורחבת", side: "אגם" },
  { name: "טל דיניק", group: "משפחה מורחבת", side: "יאנה" },
  { name: "אריאל דיניק", group: "משפחה מורחבת", side: "יאנה" },
  { name: "נתי קשש", group: "חברים", side: "אגם" },
  { name: "זכריה טובי", group: "חברים", side: "אגם" },
  { name: "נעומי באבד", group: "חברים", side: "אגם" },
  { name: "דורון קרני", group: "חברים", side: "אגם" },
  { name: "קורן תומר וטלי", group: "חברים", side: "יאנה" },
  { name: "פרוידנטל רון וסיוון", group: "חברים", side: "יאנה" },
  { name: "הברמן דביר וסברינה", group: "חברים", side: "יאנה" },
  { name: "ששון גל", group: "חברים", side: "יאנה" },
  { name: "גארי רועי", group: "חברים", side: "יאנה" },
  { name: "גלנטה קוחליק שיר טום וניק", group: "חברים", side: "יאנה ואגם" },
  { name: "אורון לב", group: "חברים", side: "יאנה ואגם" },
  { name: "ג׳ף יידל", group: "חברים", side: "יאנה ואגם" },
  { name: "פסי איתי וגלית", group: "חברים", side: "יאנה ואגם" },
  { name: "בר אנימנגה", group: "חברים", side: "יאנה ואגם" },
  { name: "ויטלי ואינה", group: "חברים של הורים", side: "הנאי" },
  { name: "גרישה ולנה", group: "חברים של הורים", side: "הנאי" },
  { name: "סרגיי וטניה", group: "חברים של הורים", side: "הנאי" },
  { name: "אירנה פרומקין", group: "חברים של הורים", side: "יאנה" },
  { name: "אלה וסשה קליורין", group: "חברים של הורים", side: "יאנה" },
  { name: "ענבי ועמרי", group: "עבודה", side: "אגם" },
  { name: "הליה", group: "עבודה", side: "אגם" },
  { name: "מיקה", group: "עבודה", side: "אגם" },
  { name: "גלית נחום", group: "עבודה", side: "אגם" },
  { name: "רועי קריב", group: "עבודה", side: "יאנה" },
  { name: "מורן ירושלמי", group: "עבודה", side: "יאנה" },
  { name: "אלכס גניס", group: "עבודה", side: "יאנה" },
  { name: "מתן דולה", group: "עבודה", side: "יאנה" },
];

const groupOrder = ["משפחה מורחבת", "חברים", "חברים של הורים", "עבודה"];
const groupColors = {
  "משפחה מורחבת": "#e8c97a",
  "חברים": "#7ab8e8",
  "חברים של הורים": "#c97ae8",
  "עבודה": "#7ae8b8",
};

export default function App() {
  const [checked, setChecked] = useState({});
  const [filter, setFilter] = useState("הכל");

  const toggle = (name) =>
    setChecked((prev) => ({ ...prev, [name]: !prev[name] }));

  const sides = ["הכל", "אגם", "יאנה", "יאנה ואגם", "הנאי"];

  const filtered = filter === "הכל" ? guests : guests.filter((g) => g.side === filter);

  const grouped = groupOrder.reduce((acc, g) => {
    const list = filtered.filter((x) => x.group === g);
    if (list.length) acc[g] = list;
    return acc;
  }, {});

  const total = filtered.length;
  const done = filtered.filter((g) => checked[g.name]).length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #fdf6ec 0%, #f0eaff 100%)",
      fontFamily: "'Heebo', sans-serif",
      direction: "rtl",
      padding: "24px 16px 48px",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;600;700&family=Frank+Ruhl+Libre:wght@700;900&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: 520, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 11, letterSpacing: 4, color: "#b89a6a", marginBottom: 6, textTransform: "uppercase" }}>
            רשימת אורחים
          </div>
          <h1 style={{
            fontFamily: "'Frank Ruhl Libre', serif",
            fontSize: 34,
            color: "#2d1f14",
            margin: "0 0 4px",
          }}>יאנה & אגם 💍</h1>
          <p style={{ margin: 0, fontSize: 13, color: "#aaa" }}>אישורי הגעה טלפוניים</p>
        </div>

        {/* Progress */}
        <div style={{
          background: "white",
          borderRadius: 16,
          padding: "14px 18px",
          marginBottom: 20,
          boxShadow: "0 2px 14px rgba(0,0,0,0.07)",
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}>
          <div style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: `conic-gradient(#4caf50 ${pct * 3.6}deg, #e8ddd3 0deg)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            <div style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              fontWeight: 700,
              color: "#2d1f14",
            }}>{pct}%</div>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#2d1f14" }}>
              {done} מתוך {total} אושרו ✓
            </div>
            <div style={{ fontSize: 12, color: "#aaa", marginTop: 2 }}>
              {total - done} נותרו לאישור
            </div>
          </div>
        </div>

        {/* Filter */}
        <div style={{
          display: "flex",
          gap: 7,
          flexWrap: "wrap",
          marginBottom: 18,
        }}>
          {sides.map((s) => (
            <button key={s} onClick={() => setFilter(s)} style={{
              padding: "6px 14px",
              borderRadius: 20,
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              fontFamily: "'Heebo', sans-serif",
              fontWeight: filter === s ? 700 : 400,
              background: filter === s ? "#2d1f14" : "white",
              color: filter === s ? "white" : "#666",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              transition: "all 0.15s",
            }}>{s}</button>
          ))}
        </div>

        {/* Guest groups */}
        {Object.entries(grouped).map(([group, people]) => (
          <div key={group} style={{ marginBottom: 18 }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 8,
            }}>
              <div style={{
                width: 10, height: 10, borderRadius: 3,
                background: groupColors[group], flexShrink: 0,
              }} />
              <span style={{ fontWeight: 700, fontSize: 13, color: "#2d1f14", letterSpacing: 0.3 }}>
                {group}
              </span>
              <div style={{ flex: 1, height: 1, background: "#e5ddd5" }} />
              <span style={{ fontSize: 11, color: "#bbb" }}>
                {people.filter(p => checked[p.name]).length}/{people.length}
              </span>
            </div>

            <div style={{
              background: "white",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}>
              {people.map((person, i) => (
                <div
                  key={person.name}
                  onClick={() => toggle(person.name)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "13px 16px",
                    cursor: "pointer",
                    borderBottom: i < people.length - 1 ? "1px solid #f5f0eb" : "none",
                    background: checked[person.name] ? "#f7fdf7" : "white",
                    transition: "background 0.15s",
                    userSelect: "none",
                  }}
                >
                  <div style={{
                    width: 22, height: 22,
                    borderRadius: 6,
                    border: checked[person.name] ? "2px solid #4caf50" : "2px solid #ddd",
                    background: checked[person.name] ? "#4caf50" : "white",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    marginLeft: 12,
                    transition: "all 0.15s",
                  }}>
                    {checked[person.name] && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>

                  <span style={{
                    flex: 1,
                    fontSize: 15,
                    color: checked[person.name] ? "#bbb" : "#222",
                    textDecoration: checked[person.name] ? "line-through" : "none",
                    transition: "all 0.2s",
                  }}>
                    {person.name}
                  </span>

                  <span style={{
                    fontSize: 11,
                    color: "#c8a96a",
                    background: "#fdf8f0",
                    padding: "2px 8px",
                    borderRadius: 10,
                    flexShrink: 0,
                  }}>
                    {person.side}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Reset */}
        {done > 0 && (
          <div style={{ textAlign: "center", marginTop: 16 }}>
            <button onClick={() => setChecked({})} style={{
              background: "none",
              border: "1px solid #ddd",
              borderRadius: 20,
              padding: "7px 18px",
              fontSize: 13,
              color: "#aaa",
              cursor: "pointer",
              fontFamily: "'Heebo', sans-serif",
            }}>
              איפוס הכל
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
