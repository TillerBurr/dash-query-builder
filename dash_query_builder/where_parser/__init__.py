"""
Where clause parser for the Dash Query Builder package.

This allows a user to parse a "Where Clause" string and get a parameterized string
a dict of parameters.

For example, the SQL where clause (indents added for ease of readability):
```sql
(
    main_report_data.difference BETWEEN -1.5 AND 2
    AND
    main_report_data.state IN ('CT', 'DE', 'MA', 'MD')
    AND
    (
        main_report_data.person = 'DELKE, SCOTT'
            OR
        main_report_data.gem IN ('Ruby', 'Gold')
    )
    AND NOT
    (
        main_report_data.trips >= 8.2
        AND
        main_report_data.category = 'REGULAR'
        AND
        NOT
        main_report_data.home_distance
            BETWEEN 5 AND main_report_data.another_column
    )
)
```

will have the output of

```sql
(
    main_report_data.difference
        BETWEEN %(kWmLCFE2ast3)s AND %(kARgegk5Lvaf)s
    AND
    main_report_data.state IN
        (
        '%(fo6xh6AMSeX8)s',
        '%(93vVGkBiQmew)s',
        '%(XAKBsHhqMpri)s',
        '%(fYDMqouT8uEe)s'
        )
    AND
    (
    main_report_data.person = '%(bKYabUMWbPxx)s'
    OR
    main_report_data.gem IN ( '%(PWbpMNL3eu2g)s','%(9pps45B3q22R)s' )
    )
    AND
    NOT
    (
    main_report_data.trips >= %(KxRuGpP7Lzkc)s
    AND
    main_report_data.category = '%(3KWbyriTq2J6)s'
    AND NOT
    main_report_data.home_distance
        BETWEEN %(cj66tmtgtvXF)s AND %(PBHYRhizBfnp)s
    )
)
```

with the parameters:
```python
{
    "kWmLCFE2ast3": -1.5,
    "kARgegk5Lvaf": 2,
    "fo6xh6AMSeX8": "CT",
    "93vVGkBiQmew": "DE",
    "XAKBsHhqMpri": "MA",
    "fYDMqouT8uEe": "MD",
    "bKYabUMWbPxx": "SCOTT",
    "PWbpMNL3eu2g": "Ruby",
    "9pps45B3q22R": "Gold",
    "KxRuGpP7Lzkc": 8.2,
    "3KWbyriTq2J6": "REGULAR",
    "cj66tmtgtvXF": 5,
    "PBHYRhizBfnp": "main_report_data.another_column",
}
```
"""

from .parser_ import WhereParser  # noqa
