import { AppBar, Toolbar, Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ProductMenu = ({ onCategorySelect }) => {
  //const [anchorEl, setAnchorEl] = useState(null);

  const categories = [
    "Bottles | Cups",

    "Hoodies",
    "Mousemats",
    "Supplements",
    "Tanks",
    "T-Shirts",
  ];

  // const dropdownCategories = [
  //     'Accessories',
  //     'Aprons',
  //     'Cases',
  //     'Headwear',
  //     'Pants',
  // ];

  return (
    <AppBar
      position="static"
      sx={{
        borderRadius: "9px",
        border: "1px solid black",
        width: "80%",
        mx: "auto",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {categories.map((category) => (
          <Button
            color="inherit"
            key={category}
            onClick={() => onCategorySelect(category)}
          >
            {" "}
            {category}
          </Button>
        ))}
        <Button color="inherit" onClick={() => onCategorySelect(null)}>
          All <ArrowDropDownIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default ProductMenu;
