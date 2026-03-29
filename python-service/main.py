# from flask import Flask, request, jsonify
# import pandas as pd

# app = Flask(__name__)

# @app.route("/suggestions", methods=["POST"])
# def suggestions():
#     data = request.json

#     if not data:
#         return jsonify({"suggestions": []})

#     df = pd.DataFrame(data)

#     suggestions = []

#     # Total spending
#     total = df["amount"].sum()

#     # Category-wise
#     category_sum = df.groupby("category")["amount"].sum()

#     for category, value in category_sum.items():
#         if value > 0.3 * total:
#             suggestions.append(
#                 f"You're spending a lot on {category}. Try reducing by 15%."
#             )

#     # Trend detection (simple)
#     if len(df) > 5:
#         suggestions.append("Your spending frequency is high. Consider budgeting weekly.")

#     return jsonify({"suggestions": suggestions})


# if __name__ == "__main__":
#     app.run(port=8000)

from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

@app.route("/suggestions", methods=["POST"])
def suggestions():
    data = request.json

    if not data:
        return jsonify({"suggestions": []})

    df = pd.DataFrame(data)

    # Ensure correct types
    df["amount"] = pd.to_numeric(df["amount"])
    df["date"] = pd.to_datetime(df["date"])

    suggestions = []

    # 🔹 Total spending
    total = df["amount"].sum()

    # 🔹 Category analysis
    category_sum = df.groupby("category")["amount"].sum()

    for category, value in category_sum.items():
        percent = (value / total) * 100

        if percent > 40:
            suggestions.append(
                f"⚠️ {category} takes {percent:.0f}% of your spending. Reduce it by 15-20%."
            )

    # 🔹 Average spending
    avg_spent = df["amount"].mean()

    high_expenses = df[df["amount"] > avg_spent * 2]

    if not high_expenses.empty:
        suggestions.append(
            f"⚠️ You had {len(high_expenses)} unusually high expenses. Try controlling big purchases."
        )

    # 🔹 Frequency analysis
    days_active = df["date"].nunique()

    if days_active > 20:
        suggestions.append(
            "📊 You spend money almost daily. Consider setting weekly limits."
        )

    # 🔹 Trend detection (last 7 days vs older)
    recent = df[df["date"] > (df["date"].max() - pd.Timedelta(days=7))]
    older = df[df["date"] <= (df["date"].max() - pd.Timedelta(days=7))]

    if not recent.empty and not older.empty:
        if recent["amount"].mean() > older["amount"].mean():
            suggestions.append(
                "📈 Your recent spending is increasing. Review your recent expenses."
            )

    return jsonify({"suggestions": suggestions})


if __name__ == "__main__":
    app.run(port=8000)