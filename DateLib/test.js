Hidden, [۱۱.۱۱.۲۰ ۱۳:۵۳]
const Expire_Token_Timer = () => {
  const users = useSelector((state) => state.users);
  const [timer, setTimer] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    setInterval(() => {
      if (!isEmpty(users)) {
        const exp = users.exp.toString();
        const dateNow = Date.now();
        const value = dateNow.toString();
        const mili = value.substring(0, exp.length);
        
        let diff_Secound = Math.floor(exp - mili);
        let day = Math.floor(diff_Secound / (60 * 60 * 24));

        diff_Secound = diff_Secound % (3600 * 24);
        let h = Math.floor(diff_Secound / 3600);

        diff_Secound = Math.floor(diff_Secound % 3600);
        let m = Math.floor(diff_Secound / 60);

        diff_secound=Math.floor(diff_Secound % 3600);
        let s = Math.floor(diff_Secound / 60);

        let totalTiime = "";
        if (day !== 0) {
          totalTiime = ${day} روز, ${h} ساعت ${m} دقیقه;
        } else if (day !== 0 || h !== 0) {
          totalTiime = ${h} ساعت ${m} دقیقه;
        } else if (day !== 0 || h !== 0 || m !== 0) {
          totalTiime = ${m} دقیقه;
        } else if (day === 0 || h === 0 || m === 0)  {
          localStorage.removeItem("token");
          dispatch(clearUser());
        }
        setTimer(totalTiime);
      } else {
        setTimer("");
      }
    }, 1000);
  }, []);
  return <div>{!isEmpty(users) ? زمان انقضا : ${timer} : null} </div>;
};

export default Expire_Token_Timer;