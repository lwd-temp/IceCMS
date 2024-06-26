import { http } from "@/utils/http";

// id获取文章详情
export const getArticleById = (id: string) => {
  return http.request<ResponseData<[]>>("get", `/article/getArticleById/${id}`);
};

/**  新增文章(修改)  */
export const newAaticle = (data?: object) => {
  return http.request<ResponseData<[]>>("post", "/article/create", { data });
};

// 获取所有文章（分页）
export const getAllArticles = (page, limit) => {
  return http.request<ResponseData<[]>>("get", `/article/getAllArticle/${page}/${limit}`);
};

// 新增文章
export const createArticle = (data: object) => {
  return http.request<ResponseData<[]>>("post", "/article/create", { data });
};

// 修改文章
export const updateArticles = (data: object, id) => {
  return http.request<ResponseData<[]>>("post", `/article/ReviseArticleById/${id}`, { data });
};

// 删除文章
export const deleteArticle = (id: string) => {
  return http.request<ResponseData<[]>>("get", `/article/DelectArticleById/${id}`);
};

// 获取文章详情
export const getArticleDetail = (id: string) => {
  return http.request<ResponseData<[]>>("get", `/article/getArticleById/${id}`);
};

// 批量删除文章
export const deleteArticlesBatch = (ids: number[]) => {
  return http.request<ResponseData<[]>>("post", "/article/DeleteArticleBatch", { data: ids });
};