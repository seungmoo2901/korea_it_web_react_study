import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users/1";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("데이터를 불러오는데 실패했습니다.");
      }

      const responseData = await response.json();
      setUser(responseData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <div>불러오는중...</div>;
  }

  if (error) {
    return <div>애러:{error}</div>;
  }

  return (
    <div>
      {user ? (
        <div>
          <p>이름:{user.name}</p>
          <p>이메일:{user.email}</p>
          <p>전화번호:{user.phone}</p>
        </div>
      ) : (
        <p>데이터가 없습니다.</p>
      )}
    </div>
  );
}

export default UserProfile;
